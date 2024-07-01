function ProfilePic(){
    const imageUrl = "./src/assets/image.webp"

    const handleClick = (e) => e.target.style.display ="none"
    return <img onClick={(e) => handleClick(e)} src={imageUrl} alt=""/>
}

export default ProfilePic