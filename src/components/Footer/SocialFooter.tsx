interface SocialFooterProps {
    ref: string;
    icon: string;
    style: string;
}

function SocialFooter (props: SocialFooterProps) {
    return (
        <li>
            <a target="_blank" href={props.ref} className={`site-button ${props.style} rounded-full size-11 leading-[39px] flex items-center justify-center`}>
                <i className={`fa-brands ${props.icon}`}></i>
            </a>
        </li>
    )
}

export default SocialFooter