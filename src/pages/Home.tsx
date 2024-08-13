import {useNavigate} from 'react-router-dom'
import './home.scss'
import logo from '../assets/logo.webp'

export const Home = () => {
	const navigate = useNavigate()
	setTimeout(() => navigate('/list'), 3000)
	return (
		<>
			<p id="logo">
				<img src={logo} alt="ユーザーアイコン" />
				<br />
				持ち物チェックリスト
			</p>
		</>
	)
}
export default Home
