import requests
from core.wyoming_bridge import WyomingCombatAPI

def test_wyoming_bridge():
    api = WyomingCombatAPI()
    result = api.submit_round("BULL", 100.0)
    assert result["status"] in ["pending", "success"]

    try:
        response = requests.post("https://api.wyoming-blockchain.org/combat/v1/submit", timeout=10)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"🚨 WYOMING CHAIN FAILURE: {str(e)}")
        assert False, "Combat logging failed"
