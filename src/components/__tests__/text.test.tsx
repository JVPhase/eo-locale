import * as Enzyme from 'enzyme';
import * as React from 'react';

import { EOLocaleNumber } from '../number';
import { EOLocaleTranslation } from '../trans';
import { TestWrapper } from './test_wrapper';

describe('EOLocaleTranslation', () => {
	it('Should render formatted message for en', () => {
		const formatted = Enzyme.render(
			<TestWrapper>
				<EOLocaleTranslation id="hello" name="test" />
			</TestWrapper>,
		);

		expect(formatted.text()).toEqual('Hello test!');
	});

	it('Should render formatted message for en', () => {
		const formatted = Enzyme.render(
			<TestWrapper>
				<EOLocaleTranslation id="hello" name={<EOLocaleNumber value={1000} />} />
			</TestWrapper>,
		);

		expect(formatted.text()).toEqual('Hello 1,000!');
	});

	it('Should render formatted message for ru', () => {
		const formatted = Enzyme.render(
			<TestWrapper language="ru">
				<EOLocaleTranslation id="hello" name="тест" />
			</TestWrapper>,
		);

		expect(formatted.text()).toEqual('Привет тест!');
	});

	it('Should render id for unsupported language', () => {
		const formatted = Enzyme.render(
			<TestWrapper language="es">
				<EOLocaleTranslation id="hello" />
			</TestWrapper>,
		);

		expect(formatted.text()).toEqual('hello');
	});

	it('Should render plural', () => {
		const formatted = Enzyme.render(
			<TestWrapper>
				<EOLocaleTranslation id="test_plural" attempts={1} />
			</TestWrapper>,
		);

		expect(formatted.text()).toEqual('You have one more attempt');
	});

	it('Should render plural', () => {
		const formatted = Enzyme.render(
			<TestWrapper>
				<EOLocaleTranslation id="test_plural" attempts={5} />
			</TestWrapper>,
		);

		expect(formatted.text()).toEqual('You have 5 attempts');
	});

	it('Should render rus plural', () => {
		const formatted = Enzyme.render(
			<TestWrapper language="ru">
				<EOLocaleTranslation id="test_plural" confirmations={3} />
			</TestWrapper>,
		);

		expect(formatted.text()).toEqual('3 подтверждения');
	});

	it('Should render rus plural', () => {
		const formatted = Enzyme.render(
			<TestWrapper language="ru">
				<EOLocaleTranslation id="test_plural" confirmations={1} />
			</TestWrapper>,
		);

		expect(formatted.text()).toEqual('1 подтверждение');
	});
});
