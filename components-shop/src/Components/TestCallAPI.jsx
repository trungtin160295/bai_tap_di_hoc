

import useFetch from "../customize/fetch";

import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';


const TestCallAPI = () => {

    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { data: dataBlogs, isLoading, isError }
        = useFetch(`https://jsonplaceholder.typicode.com/posts`,true);    

    useEffect(() => {
        if (dataBlogs && dataBlogs.length > 0) {
            let data = dataBlogs.slice(0, 20);
            setNewData(data) 
        }
    }, [dataBlogs]);

    const handleAddNew = (blog) => {
        let data = newData;
        data.unshift(blog);

        setShow(false);
        setNewData(data);
    }

    const deletePost = (id) => {
        let data = newData;
        data = data.filter(item => item.id !== id)
        setNewData(data);
    }


    const AddNewBlog = (props) => {
        const [title, setTitle] = useState('');
        const [content, setContent] = useState('');
    
        const handleSubmitBtn = async () => {
            if (!title) {
                alert('empty title');
                return;
            }
            if (!content) {
                alert('empty content')
                return;
            }
    
            let data = {
                title: title,
                body: content,
                userId: 1,
            }
    
            let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
            if (res && res.data) {
                let newBlog = res.data;
                props.handleAddNew(newBlog);
            }
    
        }
    
    
    
        return (
            <div className="add-new-container">
    
                <div className="text-add-new">---Add new blogs ---</div>
                <div className="inputs-data">
                    <label>Title: </label>
                    <input type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className="inputs-data">
                    <label>Content: </label>
                    <input type="text"
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                    />
                </div>
                <button className="btn-add-new" onClick={handleSubmitBtn}>Submit</button>
    
            </div>
        )
    }






    return (
        <>

            <Button variant="primary" className="my-3" onClick={handleShow}>
                + Add new blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNew={handleAddNew} />
                </Modal.Body>
            </Modal>

            <div className="blogs-container">
                {isLoading === false && newData && newData.length > 0 && newData.map(item => {

                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">
                                <span>{item.title} </span>
                                <span onClick={() => deletePost(item.id)}>X</span>
                            </div>
                            <div className="content">{item.body}</div>
                            <button>
                                <Link to={`/blog/${item.id}`}>  View detail</Link>
                            </button>
                        </div>
                    )
                })}

                {isLoading === true &&
                    <div style={{ textAlign: 'center !important', width: '100%' }}>Loading data...</div>
                }
            </div>
        </>

    )
}

export default TestCallAPI;
