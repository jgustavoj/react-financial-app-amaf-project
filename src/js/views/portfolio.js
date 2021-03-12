import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Portfolio = () => {
	const { store, actions } = useContext(Context);
	const [question_1, setQuestion_1] = useState("");
	const [question_2, setQuestion_2] = useState("");
	const [question_3, setQuestion_3] = useState("");
	const [question_4, setQuestion_4] = useState("");
	const [question_5, setQuestion_5] = useState("");

	return (
		<>
			<section className="section">
				<div className="container has-text-centered">
					<h2 className="title has-text-centered mb-6">Portfolio Questions</h2>
					<div className="columns is-centered">
						<div className="column is-5 is-4-desktop">
							<form>
								<div className="field">
									<div className="control">
										<input
											className="input"
											type="text"
											placeholder="Question 1"
											value={question_1}
											onChange={e => setQuestion_1(e.target.value)}
										/>
									</div>
								</div>
								<div className="field">
									<div className="control">
										<input
											className="input"
											type="text"
											placeholder="Question 2"
											value={question_2}
											onChange={e => setQuestion_2(e.target.value)}
										/>
									</div>
								</div>
                                <div className="field">
									<div className="control">
										<input
											className="input"
											type="text"
											placeholder="Question 3"
											value={question_3}
											onChange={e => setQuestion_3(e.target.value)}
										/>
									</div>
								</div>
                                <div className="field">
									<div className="control">
										<input
											className="input"
											type="text"
											placeholder="Question 4"
											value={question_4}
											onChange={e => setQuestion_4(e.target.value)}
										/>
									</div>
								</div>
                                <div className="field">
									<div className="control">
										<input
											className="input"
											type="text"
											placeholder="Question 5"
											value={question_5}
											onChange={e => setQuestion_5(e.target.value)}
										/>
									</div>
								</div>
								<div className="field">
									<button
										type="button"
										className="button is-danger is-fullwidth"
										onClick={() => actions.porfolio(question_1, question_2, question_3, question_4, question_5)}>
										Submit!
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
