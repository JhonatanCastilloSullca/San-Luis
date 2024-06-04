const SocialLinks = ({ titulo, link }) => {
    return (
        <a href={link} className="text-white">
            {titulo}
        </a>
    );
};

export default SocialLinks;
