import {useField, useFormikContext} from 'formik';
import React from 'react';
import Select from 'react-select';

const options: {value: string; label: string}[] = [
	{value: '16:00', label: '16:00'},
	{value: '17:00', label: '17:00'},
	{value: '18:00', label: '18:00'},
	{value: '19:00', label: '19:00'},
	{value: '20:00', label: '20:00'},
	{value: '21:00', label: '21:00'}
];

export const SelectTime: React.FC<{name: string}> = ({name}) => {
	const {setFieldValue} = useFormikContext();
	const [field] = useField(name);
	return (
		<React.Fragment>
			<Select
				defaultValue={options[1]}
				options={options}
				{...field}
				name={name}
				onChange={val => {
					setFieldValue(field.name, val);
				}}
				value={field.value || null}
			/>
		</React.Fragment>
	);
};
