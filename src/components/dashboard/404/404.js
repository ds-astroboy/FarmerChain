import React, { Component } from 'react';
import { connect } from 'react-redux'
import './404.css'
import $ from 'jquery';
const jQuery = $;

class NotFound extends Component{
    componentDidMount(){
        var Gear = document.getElementById('Gear');
        var MainBody = document.getElementById('MainBody');
        var GearSpeed = 1;

        Gear.addEventListener('click', function(ev){
            console.log(GearSpeed);
            Gear.style.cssText =
                'animation-duration:' + GearSpeed +'s';
            GearSpeed = GearSpeed/1.2;
            if(GearSpeed <= 0.1) {
                MainBody.style.cssText = 'animation: ColorFiesta 3s infinite';
            }
        });
    }

    render(){
        return(
            <div>
                <div class="MainGraphic">
                    <svg id="Gear" class="Cog" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M29.18 19.07c-1.678-2.908-.668-6.634 2.256-8.328L28.29 5.295c-.897.527-1.942.83-3.057.83-3.36 0-6.085-2.743-6.085-6.126h-6.29c.01 1.043-.25 2.102-.81 3.07-1.68 2.907-5.41 3.896-8.34 2.21L.566 10.727c.905.515 1.69 1.268 2.246 2.234 1.677 2.904.673 6.624-2.24 8.32l3.145 5.447c.895-.522 1.935-.82 3.044-.82 3.35 0 6.066 2.725 6.083 6.092h6.29c-.004-1.035.258-2.08.81-3.04 1.676-2.902 5.4-3.893 8.325-2.218l3.145-5.447c-.9-.515-1.678-1.266-2.232-2.226zM16 22.48c-3.578 0-6.48-2.902-6.48-6.48S12.423 9.52 16 9.52c3.578 0 6.48 2.902 6.48 6.48s-2.902 6.48-6.48 6.48z"/></svg>
                </div>

                <svg class="Spanner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.285 7.12c-.05-.17-.184-.3-.354-.345-.17-.047-.35.003-.476.126L16.838 9.46l-1.914-.383-.38-1.907 2.644-2.585c.126-.123.178-.303.137-.474s-.168-.31-.336-.362c-.532-.166-1.02-.248-1.49-.248-2.757 0-5 2.243-5 5 0 .323.038.65.118 1.01-.562.463-1.096.862-1.7 1.314-.866.646-1.846 1.377-3.183 2.506C4.95 14.016 4.5 14.99 4.5 16c0 1.93 1.57 3.5 3.5 3.5 1.02 0 1.993-.456 2.662-1.25 1.15-1.347 1.89-2.336 2.544-3.21.442-.59.832-1.11 1.283-1.66.36.082.687.12 1.01.12 2.757 0 5-2.243 5-5 0-.437-.068-.875-.215-1.38zM8 17c-.553 0-1-.447-1-1s.447-1 1-1 1 .447 1 1-.447 1-1 1z"/>
                </svg>
                <h1 class="MainTitle">
                    Oops! We're No such Page!
                </h1>
            </div>
        )
    }

}



export default connect(null,null)(NotFound);
