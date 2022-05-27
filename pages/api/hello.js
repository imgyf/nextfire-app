const client = require('@sendgrid/client')
client.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler (req, res) {
  try {
    const data = {
      list_ids: [
        '516407e0-d99f-4a54-b048-520545cc1f4e'
      ],
      contacts: [
        {
          email: 'ryan39@lee-young.com'
        }
      ]
    }

    const request = {
      url: '/v3/marketing/contacts',
      method: 'PUT',
      body: data
    }

    client.request(request)
      .then(([response, body]) => {
        console.log(response.statusCode)
        console.log(response.body)
      })
      .catch(error => {
        console.error(error)
      })
    return res.status(200).json({ success: true })
  } catch (error) {
    res.statusCode = 404
    return res.json({
      name: error.message
    })
  }
}
