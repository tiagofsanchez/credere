const airtable_api_key = process.env.AIRTABLE_API_KEY;
const airtable_base_id = process.env.AIRTABLE_BASE_ID;
const view = "crm";

let url = "https://api.airtable.com/v0/" + airtable_base_id + "/" + view;

export default async function handler(req, res) {
  const { name, email } = JSON.parse(req.body);

  if (!name || !email) {
    return res.status(400).json({ error: "Missing Fields!" });
  }
  if (req.method != "POST") {
    return res.status(405).json({ error: "Method not Allowed!" });
  }

  const request = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${airtable_api_key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields: { name: name, email: email } }),
  });
  if (request.ok) {
    return res.status(200).json({ data: "OK!!!" });
  }
  return res.status(400).json({ error: "ERROR!" });
}
