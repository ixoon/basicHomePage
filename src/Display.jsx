import React, {useState} from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BackupIcon from '@mui/icons-material/Backup';



function Display(){

    const [text, setText] = useState("");
    const [H3, setH3] = useState("");
    const [Icon, setIcon] = useState(null);

    function handleText1(){
        setIcon(<AccessTimeIcon sx={{ color:  `hsl(286, 100%, 57%)` }}/>)
        setH3(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);
        setText(`Nunc in magna dignissim, molestie metus volutpat,
                sagittis magna. Donec suscipit pulvinar metus ac maximus. In sem libero,
                laoreet sed imperdiet id, laoreet ut neque. Duis ut turpis ornare, ornare ipsum
                id, luctus turpis. Aliquam ut facilisis turpis. Vivamus nec tempus orci.
                Nullam blandit, mi eget laoreet tristique, massa diam congue ante,
                vel feugiat tortor libero eu leo. Sed sed leo ac nulla faucibus vehicula.
                Morbi et neque finibus, ullamcorper odio nec, hendrerit massa.`);
    }

    function handleText2(){
        setIcon(<AssignmentTurnedInIcon sx={{ color:  `hsl(286, 100%, 57%)` }}/>)
        setH3(`Maxime mollitia,molestiae quas vel sint commodi repudiandae`);
        setText(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                minima nesciunt dolorem!`);
    }

    function handleText3(){
        setIcon(<AutoAwesomeIcon sx={{ color:  `hsl(286, 100%, 57%)` }}/>)
        setH3(`Provident similique accusantium nemo autem.`);
        setText(`Officiis iure rerum voluptates a cumque velit 
                quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
                fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
                consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam similique ad 
                earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
                fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
                suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
                totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
                quasi aliquam eligendi, placeat qui corporis!
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`);
    }

    function handleText4(){
        setIcon(<BackupIcon sx={{ color:  `hsl(286, 100%, 57%)` }}/>)
        setH3(`Quo neque error repudiandae fuga?`);
        setText(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nam tincidunt, nibh non dignissim rutrum, ligula magna posuere justo, ut
                fringilla risus purus ac odio. Maecenas fermentum laoreet mauris vel fermentum.
                Ut ornare posuere eros, vitae blandit ligula consequat nec. Aliquam convallis
                dapibus velit ac vehicula.There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
                The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc`);
}

    return(
        <>
        <div className="display-container">

            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
            <div className="button-container">
            <button onClick={handleText1}>Delivery</button>
            <button onClick={handleText2}>Refund</button>
            <button onClick={handleText3}>Price</button>
            <button onClick={handleText4}>Payment</button>

            </div>
            <h3>{Icon } {H3}</h3>
            <p>{text}</p>

        </div>
        </>
    )

}

export default Display;