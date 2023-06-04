import { ChatGPTAPI } from 'chatgpt'

async function gpt() {
  const api = new ChatGPTAPI({
    apiKey: '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'
  })

  const res = await api.sendMessage('Hello World!')
  console.log(res.text)
  return res.text;
}

export default gpt;