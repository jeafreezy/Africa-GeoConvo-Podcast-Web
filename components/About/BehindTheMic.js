import React from 'react';
import { TitleStyles } from '../utilsStyles';
import { BehindTheMicStyle } from '../Styles/About';
import { PodcastHosts } from '../../utils/data';

function BehindTheMic() {
	return (
		<>
			<TitleStyles>Behind The Mic</TitleStyles>
			<BehindTheMicStyle>
				<div className="container">
					{PodcastHosts.map(
						(
							{
								name,
								profileImageFileName,
								bio,
								socialLinkedIn,
								socialTwitter,
								designation,
							},
							index
						) => (
							<div className="host-card">
								<div className="head">
									<figure>
										<img
											src={`/static/assets/${profileImageFileName}`}
											alt={name}
											loading="lazy"
										></img>
										<figcaption>{name}</figcaption>
										<p>{designation}</p>
									</figure>
								</div>
								<div className="body">
									<p>{bio}</p>
								</div>
								<div className="socials">
									<a
										href={socialLinkedIn}
										target="_blank"
										rel="noopener noreferer"
									>
										<img
											src="/static/assets/linkedin.png"
											alt="LinkedIn icon"
										></img>
									</a>
									{socialTwitter && (
										<a
											href={socialTwitter}
											target="_blank"
											rel="noopener noreferer"
										>
											<img
												src="/static/assets/twitter.png"
												alt="Twitter icon"
											></img>
										</a>
									)}
								</div>
							</div>
						)
					)}
				</div>
			</BehindTheMicStyle>
		</>
	);
}

export default BehindTheMic;
