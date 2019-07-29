import React, { Component } from 'react';
import swal from './../../../node_modules/sweetalert/dist/sweetalert.min.js'
import Title from '../title/Title'

class index extends Component {
	submit(){
		swal({
			title: 'Mail sent',
			text: 'Thankyou for your mail, we will response as soon as possible to your email.',
			icon: 'success',
		  timer: 5000
		})
	}

	render () {
		return (
			<div id="contact" className="h-100 pt-nav">
				<div className="container">
					<div className="row">
						<div className="col-6 offset-3">
							<Title text="Drop a line" />
							<br/>
							<form>
								<div className="form-group">
									<label htmlFor="Email" className="text-muted small">Email</label>
									<input type="email" className="form-control" id="email" autoComplete="off" />
								</div>
								<div className="form-group">
									<label htmlFor="Subject" className="text-muted small">Subject</label>
									<input type="text" className="form-control" id="subject" autoComplete="off" />
								</div>
								<div className="form-group">
									<label htmlFor="Message" className="text-muted small">Message</label>
									<textarea className="form-control" id="message" rows="5"></textarea>
								</div>
								<div className="form-group">
									<center><button className="btn btn-block btn-primary" onClick={this.submit}>Send mail</button></center>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default index;