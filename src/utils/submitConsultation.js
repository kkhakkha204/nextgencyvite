const NOCODB_ENDPOINT = 'https://data.nextgency.vn/api/v1/db/data/noco/pt23og868jycyzo/mmw1iwmnal17i0t';
const NOCODB_TOKEN = 'dY0LCW8ChnwtfC6KiA94S17SaBax6RGRaZ4LMaHb';

const postRecord = (payload) => fetch(NOCODB_ENDPOINT, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'xc-token': NOCODB_TOKEN
    },
    body: JSON.stringify(payload)
});

/* Gửi form tư vấn lên NocoDB. Dịch vụ cần tư vấn được ghi vào cột `class`. */
export const submitConsultation = (formData) => postRecord({
    customer_name: formData.customer_name,
    phone: formData.phone,
    email: formData.email,
    business_field: formData.business_field,
    brand_name: formData.brand_name,
    class: formData.service,
    consultation_request: formData.consultation_request,
    created_at: new Date().toISOString(),
    status: 'New'
});
