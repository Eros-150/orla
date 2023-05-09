import React from 'react';
<<<<<<< HEAD
import '../css/body.css';
import ImageGrid from './imageGrid';

const Body = () => {
    return (
        <div className="body">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1>Welcome to Monlau!</h1>
                        {/* <img src='../images/monlau-fp-es.png'/> */}
                        { <ImageGrid /> }
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum dui vel
                            ante eleifend, a consectetur neque posuere. Sed eget elit vitae metus venenatis
                            semper. Sed pellentesque justo eu odio efficitur tempus. Mauris accumsan, nisi
                            nec facilisis ultrices, ipsum urna vulputate lectus, eu volutpat dolor nibh sed
                            dolor. Nulla facilisi. Suspendisse vel sapien semper, eleifend turpis eu, euismod
                            lacus. Etiam feugiat ex et mi imperdiet, ut blandit metus tincidunt.</p>
                        <p>Quisque maximus metus id nibh consequat ullamcorper. Praesent fringilla, magna sed
                            consectetur vulputate, purus ipsum rutrum diam, eu pretium massa tortor nec neque.
                            Aenean viverra, dolor vel iaculis bibendum, justo enim tincidunt nibh, sit amet
                            ullamcorper nunc lorem non urna. Sed eu dui orci. Integer tristique tortor id
                            malesuada tincidunt. Etiam nec erat vitae lectus dictum vehicula. Fusce ullamcorper
                            orci eget quam facilisis malesuada. Aliquam vel massa et nunc semper venenatis
                            non non lorem. In hac habitasse platea dictumst.</p>
                        <p>Donec eget tellus vel velit auctor vestibulum. Sed mollis lorem sit amet eros 
                            gravida, quis semper urna congue. Aliquam sollicitudin, mauris nec consequat 
                            elementum, justo augue blandit nulla, vitae pulvinar elit sapien non justo. 
                            Praesent euismod ultrices ipsum, sit amet fermentum odio cursus non. Sed non 
                            blandit metus. Etiam vitae consequat sapien. Nulla facilisi. Nulla sodales felis 
                            magna, at euismod lacus congue in. Aenean sed tellus ipsum. Proin aliquam sed 
                            lectus vel rhoncus. Mauris at velit ac velit faucibus aliquam vitae in elit.</p>
                            <p>Donec eget tellus vel velit auctor vestibulum. Sed mollis lorem sit amet eros 
                            gravida, quis semper urna congue. Aliquam sollicitudin, mauris nec consequat 
                            elementum, justo augue blandit nulla, vitae pulvinar elit sapien non justo. 
                            Praesent euismod ultrices ipsum, sit amet fermentum odio cursus non. Sed non 
                            blandit metus. Etiam vitae consequat sapien. Nulla facilisi. Nulla sodales felis 
                            magna, at euismod lacus congue in. Aenean sed tellus ipsum. Proin aliquam sed 
                            lectus vel rhoncus. Mauris at velit ac velit faucibus aliquam vitae in elit.</p>
                            <p>Donec eget tellus vel velit auctor vestibulum. Sed mollis lorem sit amet eros 
                            gravida, quis semper urna congue. Aliquam sollicitudin, mauris nec consequat 
                            elementum, justo augue blandit nulla, vitae pulvinar elit sapien non justo. 
                            Praesent euismod ultrices ipsum, sit amet fermentum odio cursus non. Sed non 
                            blandit metus. Etiam vitae consequat sapien. Nulla facilisi. Nulla sodales felis 
                            magna, at euismod lacus congue in. Aenean sed tellus ipsum. Proin aliquam sed 
                            lectus vel rhoncus. Mauris at velit ac velit faucibus aliquam vitae in elit.</p>
                            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;