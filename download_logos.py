import urllib.request
import os

urls = {
    "tata_aig.png": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tata_AIG_General_Insurance_Company_Limited_Logo.png",
    "digit.png": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Digit_Insurance_Logo.png",
    "bajaj.png": "https://upload.wikimedia.org/wikipedia/commons/2/23/Bajaj_Allianz_General_Insurance.png",
    "hdfc_ergo.png": "https://upload.wikimedia.org/wikipedia/commons/9/9f/HDFC_ERGO_Logo.png"
}

os.makedirs("public/logos", exist_ok=True)

for name, url in urls.items():
    try:
        urllib.request.urlretrieve(url, f"public/logos/{name}")
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed to download {name}: {e}")
