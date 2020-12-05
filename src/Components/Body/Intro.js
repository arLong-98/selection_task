import React, { Component } from 'react';
import Card from '../Card';
class Intro extends Component{

    state = {
        cName:{
            img: "intro-image",
            content: "intro-content",
            button: "intro-btn"
        }
    }

    render(){
        const src = "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80"
        return (
            <Card cName={this.state.cName} img={true} imgSrc= {src} button={true} btnvalue="Register Now" title='Apna Home' body=" On thee made surcease the once, that velvet syllable ominous gave i nothing thereis moment, napping with least word is and though not sure ever, radiant from echo lenore swung lost i nevermore. And and thy leave lenore. Came whether muttered floor seeing now and shorn he that, let for." /> 
        )
    }
}
export default Intro;