# TODO: Update Contact Form for Multiple Service Selection

## Tasks
- [x] Update Contact.jsx to use multi-select for services
- [x] Change label from "Select a service" to "Select the services you need"
- [x] Update formData to store services as array
- [x] Update handleInputChange for multi-select
- [x] Update form submission to send services array to /service-inquiry endpoint
- [ ] Update backend /service-inquiry endpoint to handle services array
- [ ] Update email content to list all selected services
- [ ] Test the multi-select UI and form submission
- [ ] Verify email includes all selected services

## Dependent Files
- xaloc-digital-agency/src/components/sections/Contact.jsx
- backend/server.js

## Followup Steps
- Test the form submission and email content
- Ensure proper validation for multi-select
- Check responsive design for multi-select on mobile
