import React from 'react'

const types = {
	email: {
		regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
		message: 'Preencha um email válido.',
	},
	password: {
		regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
		message:
			'A senha precisa ter 1 caracter maiúsculo, 1 minúsculo, 1 digito e 1 caracter especial. Com no mínimo 8 caracteres.',
	},
	number: {
		regex: /^\d+$/,
		message: 'Apenas números.',
	},
}

function useForm(type) {
	const [value, setValue] = React.useState('')
	const [error, setError] = React.useState(null)

	function validate(value) {
		if (type === false) return true
		if (!value.length) {
			setError('Preencha o campo.')
			return false
		} else if (types[type] && !types[type].regex.test(value)) {
			setError(types[type].message)
			return false
		} else {
			setError(null)
			return true
		}
	}

	function onChange({ target }) {
		if (error) validate(target.value)
		setValue(target.value)
	}

	return {
		value,
		setValue,
		onChange,
		error,
		onBlur: () => validate(value),
		validate: () => validate(value),
	}
}

export default useForm
