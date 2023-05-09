import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/components/informationcontainer.sass";

const InformationContainer = () => {
	return (
		<section className="information">
			<div className="info-card">
				<AiFillPhone id="phone-icon" />
				<div>
					<h3>Contato</h3>
					<p>(91) 99184-9107</p>
				</div>
			</div>
			<div className="info-card">
				<AiOutlineMail id="email-icon" />
				<div>
					<h3>E-Mail</h3>
					<p>lealbelem@outlook.com</p>
				</div>
			</div>
			<div className="info-card">
				<AiFillEnvironment id="pin-icon" />
				<div>
					<h3>Localização</h3>
					<p>Belém / PA</p>
				</div>
			</div>
		</section>
	);
};

export default InformationContainer;
