export const validators = {
    required: (value) => {
        if (!value || (typeof value === 'string' && !value.trim())) {
            return 'This field is required';
        }
        return null;
    },

    email: (value) => {
        if (!value) return null;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return 'Please enter a valid email address';
        }
        return null;
    },

    phone: (value) => {
        if (!value) return null;
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) {
            return 'Please enter a valid phone number';
        }
        return null;
    },

    minLength: (min) => (value) => {
        if (!value) return null;
        if (value.length < min) {
            return `Must be at least ${min} characters`;
        }
        return null;
    },

    maxLength: (max) => (value) => {
        if (!value) return null;
        if (value.length > max) {
            return `Must be no more than ${max} characters`;
        }
        return null;
    },

    url: (value) => {
        if (!value) return null;
        try {
            new URL(value);
            return null;
        } catch {
            return 'Please enter a valid URL';
        }
    }
};

export const validateField = (value, validationRules) => {
    if (!validationRules || validationRules.length === 0) {
        return null;
    }

    for (const rule of validationRules) {
        const error = rule(value);
        if (error) {
            return error;
        }
    }

    return null;
};

export const validateForm = (formData, validationSchema) => {
    const errors = {};
    let isValid = true;

    Object.keys(validationSchema).forEach(fieldName => {
        const error = validateField(formData[fieldName], validationSchema[fieldName]);
        if (error) {
            errors[fieldName] = error;
            isValid = false;
        }
    });

    return { isValid, errors };
};
