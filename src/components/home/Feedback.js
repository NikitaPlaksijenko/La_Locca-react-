import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../../css/home/Feedback.css';




class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: '-35%',
      right: '-65%',
      name: '',
      email: '',
      message: ''
    };
    this.toggle = this.toggle.bind(this);
    this.untoggle = this.untoggle.bind(this);
  }
  toggle = () => {
    this.setState({ left: '0%', right: '0%'});
  }
  untoggle = () => {
    this.setState({ left: '-30%', right: '-70%'});
  }
  render() {
    return(
      <>
    <OverlayTrigger
      key='top'
      placement='top'
      overlay={
        <Tooltip className='tooltip'>
          Feedback
        </Tooltip>
      }
    >
      <div className='cursor-pointer feedback' onClick={this.toggle}>
      </div>
    </OverlayTrigger>
    <div style={{ backgroundColor: '#009bff',  width: '30%', height: '100%', borderRadius: '10px',left: this.state.left ,position:'fixed', top: '0%', opacity: '0.8', transition: 'all 300ms linear'}} >
      <div style={{ height:'90%',width:'auto', marginLeft: '10px', marginRight:'10px',marginBotton:'10px',marginTop:'10px', background: '#fff', borderRadius: '10px'}}>
           <div className = 'container-contact1'>
               <span className='contact1-title'>Feedback</span>
            </div>    
               <span className = 'contact1-form-content'>
                  Our platform is still a work in progress.<br/>
                  We welcome all feedback and suggestions to improve this platform.
               </span>
   
               <div className = 'wrap-input1 validate-input' id='name'>
                  <input className='input1' type='text' name='name' placeholder='Name' onChange = {e=> this.setState({name: e.target.value})} required />
                  <span className='shadow-input1'></span>
               </div>
   
               <div className = 'wrap-input1 validate-input' id='email'>
                  <input className='input1' type='email' name='email' placeholder='Email' min-length = '10' onChange = {e=> this.setState({email: e.target.value})}required />
                  <span className='shadow-input1'></span>
               </div>
   
               <div className = 'wrap-input1 validate-input' id='message'>
                  <textarea className='input1' name="message" placeholder='Message' onChange = {e=> this.setState({message: e.target.value})} required></textarea>
                  <span className='shadow-input1'></span>
               </div>
               <div class='container-contact1-form-btn'>
                     <input type='submit' value='Submit' id='sutmit' onClick = {this.handle} class='contact1-form-btn' />
               </div>
               <br/>
               <span class='contact1-footnote'>
                     Click outside the feedback panel to close the panel.
               </span>
       </div>
    </div>
    <div style={{width:'70%', height: '100%', top:'0%', position:'fixed',right: this.state.right}} onClick={this.untoggle}></div>
    </>
    );
  }
}
export default Feedback;