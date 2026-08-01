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

/* Gửi form tư vấn lên NocoDB.
   Nếu bảng chưa có cột `service`, tự động gửi lại và gộp dịch vụ vào nội dung yêu cầu
   để không mất dữ liệu và form vẫn hoạt động. */
export const submitConsultation = async (formData) => {
    const base = {
        customer_name: formData.customer_name,
        phone: formData.phone,
        email: formData.email,
        business_field: formData.business_field,
        brand_name: formData.brand_name,
        consultation_request: formData.consultation_request,
        created_at: new Date().toISOString(),
        status: 'New'
    };

    const response = await postRecord({...base, service: formData.service});
    if (response.ok) return response;

    return postRecord({
        ...base,
        consultation_request: formData.service
            ? `[Dịch vụ: ${formData.service}] ${formData.consultation_request}`
            : formData.consultation_request
    });
};
