import styles from './BaseButton.module.scss'

const BaseButton = ({ text, customStyle }: { text: string, customStyle: { width: string, fontSize: string, fontWeight: string } }) => {
    return (
        <button style={customStyle} className={styles.container}>
            {text}
        </button>
    );
}

export default BaseButton;