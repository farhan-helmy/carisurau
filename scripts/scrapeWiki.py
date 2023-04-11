## This script scrapes the Wikipedia page for a list of shopping malls in Malaysia
import json
from bs4 import BeautifulSoup
import requests

url = 'https://en.wikipedia.org/wiki/List_of_shopping_malls_in_Malaysia'
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')

# Find all the town and state sections
town_state_sections = soup.find_all('h3')

data = {}

# Loop through each town and state section and extract the mall names
for section in town_state_sections:
    state = section.find_previous('h2').text.strip().replace('[edit]', '')
    town = section.text.strip().replace('[edit]', '')
    malls = section.find_next_sibling('ul')
    if malls is not None:
        mall_list = malls.find_all('li')
        mall_names = [mall.text.split('[')[0].strip() for mall in mall_list]
        district_name = town.split(',')[0].strip()
        if district_name not in data.setdefault(state, {}).setdefault("district", {}):
            data[state]["district"][district_name] = {"mall": mall_names}
        else:
            data[state]["district"][district_name]["mall"] = mall_names

# Find the Kuala Lumpur section
kuala_lumpur_section = soup.find('span', {'id': 'Kuala_Lumpur'}).parent

# Loop through Kuala Lumpur section and extract the mall names
kuala_lumpur_malls = []
for sibling in kuala_lumpur_section.find_next_siblings():
    if sibling.name == 'h3':
        break
    if sibling.name == 'h4':
        continue
    if sibling.name == 'ul':
        malls = sibling.find_all('li')
        for mall in malls:
            kuala_lumpur_malls.append(mall.get_text().split('[')[0].strip())

# Add Kuala Lumpur mall data to the existing data
data['Federal Territories']['district']['Kuala Lumpur'] = {"mall": kuala_lumpur_malls}

data = {"data": data}

with open('mall_data.json', 'w') as f:
    json.dump(data, f, indent=4)