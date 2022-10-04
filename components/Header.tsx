import Styles from "../styles/Header.module.css";

export default function Header() {
	return (
		<>
			<div className={Styles.header}>
				<span className={Styles.name}>FoodPerDollar</span>
				<div className={Styles.pages}>Home Resturaunts About</div>
				<div className={Styles.search}>Search</div>
			</div>
		</>
	);
}
