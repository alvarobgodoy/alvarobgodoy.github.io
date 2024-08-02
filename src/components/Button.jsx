export default function Button({children, link, type}) {
    return (
        <a href={link} className={`btn ${type ? `btn-${type}` : ''}`}>
            {children}
        </a>
    )
}