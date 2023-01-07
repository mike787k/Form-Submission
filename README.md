## Problem 2
## Form Validation

---

## Instructions

In this problem, we will be working on writing our own validation functions for form submission events. In assignment 1, we simply used the required attribute on form fields to note that the fields are required for submission.

Here, we will be using JavaScript to achieve not only the same functionality, but go a step further and check if the user's input is valid (i.e No special characters for names, phone numbers are all numbers, email pattern, etc...)

---

## Requirements

- Code your solution into the provided `solution.js`.
- **DO NOT** modify anything inside `index.html`
- Although styling will not be graded, feel free to modify styling in `index.css`
- Details on the validation rules are provided after each requirement below.

### Error Message Placement
```text
As a USER
WHEN I am presented with this form
AND I have errors with my form submission
I SHOULD see error messages show up
AND they should be positioned below their respective fields
```

### Missing Field Validation
```text
As a USER
WHEN I am presented with this form
AND I don't fill out any field
AND I click submit
I SHOULD see required field error messages
```
- All whitespaces also counts as missing input.

### Name Validation
```text
As a USER
WHEN I type in names into the names field (first/last)
AND I type in any non-alpha characters
AND I try and submit the form
I SHOULD see a name validation error show up for the field
```
- Min length of input: `1`
- Max length of input: `n/a`

### Email Validation
```text
As a USER 
WHEN I type in my email into the email field
AND I type in an invalid email pattern (see validation rule below)
AND I click submit
I SHOULD see an email validation error show up for the field
```
To keep it simple, we will follow the below validation rule for email.
- Valid email follows this pattern `<TEXT>@<TEXT>.<DOMAIN>`
- `<TEXT>` - are alpha-numeric, you can start with numbers as well.
- `<DOMAIN>` - are alpha characters only. 

### Phone Validation
```text
As a USER
WHEN I type non numeric values into the phone number field
AND I click submit
I SHOULD see a phone number validation error show up for the field
```
- Validation rule is pretty straight forward, numbers only. No `-`'s or other non numeric characters.