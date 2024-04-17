import { ButtonProps } from "./Button.types";
import "./Button.styles.scss";

export default function Button({ label }: ButtonProps): JSX.Element {
    return <button className="col-ui-button">{label}</button>
} 