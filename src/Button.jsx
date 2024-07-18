/* import styles from './Button.module.css' */
function Button () {
    const styles = {
        backgroundColor:" rgba(74, 204, 191, 0.932)",
        color: "aliceblue",
        borderRadius: "5px",
        border: "none",
        padding:  "10px 20px",
        cursor:"pointer",
    }
    return(<button style={styles}/*  className=/*{styles.clicky} "clicky" */>click me</button>);
}

export default Button
