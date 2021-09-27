/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import {FormikTouched, FormikErrors} from 'formik';
import {ChangeEvent, FocusEvent} from 'react';

interface Props {
	handleChange(e: ChangeEvent): void;
	values: {email: string; name: string; message?: string};
	handleBlur(e: FocusEvent): void;
	touched: FormikTouched<{email: string; name: string; message?: string}>;
	errors: FormikErrors<{email: string; name: string; message?: string}>;
}

export const BookTableSecondStep: React.FC<Props> = ({values, errors, touched, handleChange, handleBlur}) => (
	<main
		css={css`
			margin: 1rem 5vw;
		`}>
		<div className='form-group'>
			<h5>
				<label>Name*</label>
			</h5>
			<input
				type='text'
				className='form-control'
				id='name'
				placeholder='Name'
				onChange={handleChange}
				value={values.name}
				onBlur={handleBlur}
			/>
			{touched.name && errors.name && <div>{errors.name}</div>}
		</div>
		<div className='form-group'>
			<h5>
				<label>Email*</label>
			</h5>
			<input
				type='email'
				className='form-control'
				id='email'
				placeholder='Email'
				onChange={handleChange}
				value={values.email}
				onBlur={handleBlur}
			/>
			{touched.email && errors.email && <div>{errors.email}</div>}
		</div>
		<div className='form-group'>
			<h5>
				<label>Message</label>
			</h5>
			<textarea
				rows={3}
				className='form-control rounded-0'
				id='message'
				placeholder='Message'
				onChange={handleChange}
				value={values.message}
				onBlur={handleBlur}
			/>
			{touched.message && errors.message && <div>{errors.message}</div>}
		</div>
	</main>
);
