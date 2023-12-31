import React, { Component } from 'react';
import { Grid,Cell, Tabs,Tab,Card,CardTitle,Button,CardText,CardMenu,IconButton,CardActions } from 'react-mdl';
import photo from '../img/1.gif';
class Project extends Component {
   constructor(props){
     super(props);
     this.state ={activetab:0};
   }

   toggletab(){
     if(this.state.activetab === 0)
      return (
       
        <div className="card">
    <img src={photo}style = {{height:'300px',border:'3px solid white',width:'300px',borderRadius:'50%'}}/>
         {/* Project 1 on PHP */}
  <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px',
     background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Codevendor</CardTitle>
    <CardText>
        This is my first project on PHP.
    </CardText>
    <CardActions border>
        <Button colored>Live Demo</Button>
        <Button colored>Github</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
   </Card>

            {/* Project 2 on PHP  */}
  <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', 
    background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>HomeTutionGuru</CardTitle>
    <CardText>
       Static Tuter Requirement Site.
    </CardText>
    <CardActions border>
        <Button colored>Live Demo</Button>
        <Button colored>Github</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
   </Card>
        </div>  
 
      )
     else if(this.state.activetab === 1)
      return (
        
        <div className="card">
         {/* Project on Tensorlow */}
  <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px',
     background: 'url(https://dv-website.s3.amazonaws.com/uploads/2018/05/kf_ann_052418.png) center / cover'}}>Neural Networks</CardTitle>
    <CardText>
        JavaScript Perceptron Visualization based On mainly Neural Networks.
    </CardText>
    <CardActions border>
        <Button colored>Live Demo</Button>
        <Button colored>Github</Button>
    </CardActions>
   </Card>

            {/* Project on R */}
  <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px',
     background: 'url(https://cdnp2.stackassets.com/fec09d591291e3191b27c45021488a9ece944496/store/opt/596/298/65d78cf7666724cd0dfb7e5c4729bd30292e34b5bcb49cb3e41374e6d292/product_13074_product_shot_wide_image.jpg) center / cover'}}>R Programming</CardTitle>
    <CardText>
      Trading Analysis on Market or IT componies.
    </CardText>
    <CardActions border>
        <Button colored>Live Demo</Button>
        <Button colored>Github</Button>
    </CardActions>
   </Card>
        </div>  
      )
     else if(this.state.activetab === 2)
      return (
        
        <div className="card">
         {/* Project 1 on React */}
  <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Codevendor</CardTitle>
    <CardText>
      My PortFolio
    </CardText>
    <CardActions border>
        <Button colored>Live Demo</Button>
        <Button colored>Github</Button>
    </CardActions>
   </Card>

            {/* Project 2 on React */}
  <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Codevendor</CardTitle>
    <CardText>
        MEME maker.
    </CardText>
    <CardActions border>
        <Button colored>Live Demo</Button>
        <Button colored>Github</Button>
    </CardActions>
   </Card>

            {/* Project 3 on React*/}
  <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Codevendor</CardTitle>
    <CardText>
      API Based project on React.
    </CardText>
    <CardActions border>
        <Button colored>Live Demo</Button>
        <Button colored>Github</Button>
    </CardActions>
   </Card>
        </div> 
      )
      else if(this.state.activetab === 3)
        return (
          
        <div className="card">
        {/* Project on Angular */}
 <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
   <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Codevendor</CardTitle>
   <CardText>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Mauris sagittis pellentesque lacus eleifend lacinia...
   </CardText>
   <CardActions border>
       <Button colored>Live Demo</Button>
       <Button colored>Github</Button>
   </CardActions>
   <CardMenu style={{color: '#fff'}}>
       <IconButton name="share" />
   </CardMenu>
  </Card>

           {/* Project on Angular*/}
 <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
   <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Codevendor</CardTitle>
   <CardText>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Mauris sagittis pellentesque lacus eleifend lacinia...
   </CardText>
   <CardActions border>
       <Button colored>Live Demo</Button>
       <Button colored>Github</Button>
   </CardActions>
   <CardMenu style={{color: '#fff'}}>
       <IconButton name="share" />
   </CardMenu>
  </Card>
       </div> 
      )
   }

  render() {
    return (
     <div className="catogory-tab">
        <Tabs activetab={this.state.activetab} onChange={(tabId)=>this.setState({activetab:tabId})} ripple>
         <Tab>PHP</Tab>
         <Tab>Neural Networks</Tab>
         <Tab>React</Tab>
         <Tab>Angular</Tab>
        </Tabs> 

         <Grid>
           <Cell col={12}>
           {this.toggletab()}
           </Cell>
         </Grid>
     </div>
      
    );
  }
}

export default Project;
