export interface CardProps {
	name : string,
	state : string,
	uf : string,
	description : string,
	approved : string ,
	captured : string ,
	onClick: () => void;
	favorite ?: boolean
}