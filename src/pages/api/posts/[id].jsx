export default function capturadorDeRequest(req, res) {
    const id = req.query.id;
    res.status(200).json({ post: id })
  }
  