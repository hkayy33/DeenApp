namespace DeenTutorFinderApi.Helpers;
using Nager.Country;

public static class CurrencyHelper
{
    public static string GetCurrencySymbol(string countryName)
    {
        var provider = new CountryProvider();
        var country = provider.GetCountries()
            .FirstOrDefault(c =>
                c.CommonName.Equals(countryName, StringComparison.OrdinalIgnoreCase));

        return country?.Currencies.FirstOrDefault()?.Symbol ?? "";
    }
}
