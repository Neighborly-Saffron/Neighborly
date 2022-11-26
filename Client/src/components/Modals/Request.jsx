import React from 'react';
import axios from 'axios';
const Request = ({
	requestedUser,
	handleNotificationClick,
	displayRequests,
}) => {
	const newUserGroup = {
		userId: requestedUser.requestedUserId,
		groupId: requestedUser.requestedGroupId,
	};

	const handleApprove = (e) => {
		console.log('it got in handleApprove');
		axios
			.post('/groupApproved', newUserGroup)
			.then((result) => {
				console.log('client side: succeeded to post to db');
				//remove modal
				handleLastRequest();
				return handleDeleteRequest();
			})
			.catch((err) => {
				console.log('client side: failed to post to db', err);
			});
	};

	const handleLastRequest = () => {
		if (displayRequests.length === 1) {
			handleDeleteRequest(); //delete request from requestjoin table
			return handleNotificationClick(); //show and close modal
		}
	};

	const handleDeleteRequest = () => {
		return axios
			.delete('/groupApproved', { params: newUserGroup })
			.then(() => {
				console.log('client side: delete data from db successfully ');
			})
			.catch((err) => {
				console.log('client side: error deleting requestjoin table');
			});
	};

	return (
		<div>
			<div
				className="text-lg font-medium leading-6 text-gray-900"
				id="modal-title"
			>
				{requestedUser.userName} has requested to join
			</div>
			<div className="mt-2"></div>
			<button
				type="button"
				className="inline-flex w-full justify-center rounded-md border border-transparent bg-lightergreen px-4 py-2 text-base
            font-medium text-white shadow-sm hover:bg-darkerblue focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto
             sm:text-sm"
				onClick={handleApprove}
			>
				Approve
			</button>
			<button
				type="button"
				className="inline-flex w-full justify-center rounded-md border border-transparent bg-darkergreen px-4 py-2 text-base
            font-medium text-white shadow-sm hover:bg-darkerblue focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto
             sm:text-sm"
				onClick={handleLastRequest}
			>
				Decline
			</button>
		</div>
	);
};

export default Request;
