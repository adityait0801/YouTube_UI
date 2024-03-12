const VideoCard =({info})=> {
    // console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails} = snippet;
    
    return <div className="p-4 my-2 w-96">
        <img className="rounded-lg w-96" alt="thumbnail" src={thumbnails.medium.url}/>
        <ul>
            <li className="font-bold">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views . {statistics.likeCount} likes</li>
        </ul>
    </div>
}

export default VideoCard;