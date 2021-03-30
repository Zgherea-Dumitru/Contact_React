
const Avatar = ({firstName, lastName, image})=>(
    <div>
        <img src={image}/>
        <h3>{firstName}{lastName}</h3>
    </div>
);

export default Avatar;