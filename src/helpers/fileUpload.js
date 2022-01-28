import cloudinary from 'cloudinary'

cloudinary.config({ 
    cloud_name: 'dpd4zujfh', 
    api_key: '731622387794898', 
    api_secret: '2ZrN3yUAPlVPSXJnkoMeDTndn-o' 
  });

export const uploadFile = async (req) => {
    let imageUrl = ''
    await cloudinary.v2.uploader.upload(req.file.path, async function (err, image) {
        if (err) { console.warn(err); }
        imageUrl = image.url
    });
    return imageUrl
}

