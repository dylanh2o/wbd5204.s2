import React from 'react';
import { Modal, Button } from 'antd';
import {SettingOutlined} from '@ant-design/icons';


const ModalConfig = () => {

	return (
		<div>
			<Button type="primary" >
				<SettingOutlined/>
			</Button>
			<Modal
				title="Basic Modal"

			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</div>
	)
};

export default ModalConfig;