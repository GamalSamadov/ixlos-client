export const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

export const USERNAME_PATTERN = /^[a-zA-Z_][a-zA-Z0-9_-]*$/
// Explanation USERNAME_PATTERN:
// 1) (?=.*[A-Za-z0-9]) ensures there's at least one letter or digit anywhere in the string
// 2) [A-Za-z_-] means the first character can be a letter, underscore, or dash (not a digit)
// 3) [A-Za-z0-9_-]* means the rest can be letters, digits, underscores, or dashes
