import Button from "./Button";

const ButtonList = () => {
    const list = ["All", "Music", "News", "Cricket", "Football", "Live", "Songs", "Movies", "Gaming", "Shorts", "Podcast"];
    
    return (
        <div className="flex m-2 mx-8">
            {list.map((item, index) => (
                <Button key={index} name={item} />
            ))}
        </div>
    );
}

export default ButtonList;