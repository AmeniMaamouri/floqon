import styles from './BaseButton.module.scss'

const BaseButton = ({ text, customStyle }: { text: string, customStyle: { maxWidth: string, fontSize: string, fontWeight: string, width?: string } }) => {
    return (
        <button style={customStyle} className={styles.container}>
            {text}
        </button>
    );
}

export default BaseButton;