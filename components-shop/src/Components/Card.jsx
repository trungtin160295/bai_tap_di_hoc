import { Button } from 'reactstrap';
import Text from './Text';
import '../style/Card.scss'


export default  function Card(props) {  
    let className;
    if (props.right) {
       className = "card";
      } else {
        className = " card right"
      }
    
    return (
        <div className={className}>
                     <img src={props.obj.linkImage}  alt={props.obj.title} />    
                     <div className='content'> 
                  <Text className="title">
                      {props.obj.title}
                   </Text>
                   <Text>
                      {props.obj.content}
                   </Text>
                  <div>
                       <Button color="info" outline>
                          Tìm hiểu thêm 
                       </Button>
                   </div>
                  
               </div>
                 
         </div>            
                     
      
    );
  }
    


