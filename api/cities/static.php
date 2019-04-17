<?php
$region_name = array(
    'Регион №',
    'Область №',
    'Губерния №',
    'Автономный округ №',
    'Федеральный округ №'
);
$company_name = array(
    'Компания №',
    'Кооператив №',
    'Фирма №',
    'Корпорация №',
    'Совместное предприятие №'
);
$city_name = array(
    'Город №',
    'Посёлок городского типа №',
    'Городское поселение №',
    'Село №',
    'СНТ №',
    'Деревня №'
);
$street_name = array(
    'Улица №',
    'Проезд №',
    'Проспект №',
    'Тупик №',
    'Бульвар №',
    'Проектируемый проезд №'
);
echo '{"state":true,"data":{';

$regions_count = 15;
$regions = array();
$companies_count = 20;
$companies = array();
$cities_in_region = 20;
$streets_in_city = 10;

ob_start();
for ($i = 0; $i < $regions_count; $i++) {
    $rand_region_name = $region_name[rand(0, count($region_name) - 1)];
    array_push(
        $regions,
        array(
            'id' => $i + 1,
            'name' => $rand_region_name . ($i + 1)
        )
    );
}
echo '"regions":' . json_encode($regions);
ob_end_flush();
for ($i = 0; $i < $companies_count; $i++) {
    $rand_company_name = $company_name[rand(0, count($company_name) - 1)];
    array_push(
        $companies,
        array(
            'id' => $i + 1,
            'name' => $rand_company_name . ($i + 1)
        )
    );
}
echo ',"companies":' . json_encode($companies);
ob_end_flush();


$cities = array();
for ($i = 0, $max = $cities_in_region * $regions_count; $i < $max; $i++) {
    $rand_city_name = $city_name[rand(0, count($city_name) - 1)];
    $region_id = rand(0, $regions_count - 1);
    array_push(
        $cities,
        array(
            'id' => $i + 1,
            'name' => $rand_city_name . ($i + 1),
            'region_id' => $region_id + 1,
            'region_name' => $regions[$region_id]['name'],
            'population' => rand(500, 400000)
        )
    );
}

echo ',"cities":' . json_encode($cities);
$cities = null;
ob_end_flush();



$streets = array();
for ($i = 0, $max = $streets_in_city * $cities_in_region * $regions_count; $i < $max; $i++) {
    $rand_street_name = $street_name[rand(0, count($street_name) - 1)];
    $city_id = rand(0, ($cities_in_region * $regions_count) - 1);
    $company_id = rand(0, $companies_count - 1);
    array_push(
        $streets,
        array(
            'id' => $i + 1,
            'name' => $rand_street_name . ($i + 1),
            'city_id' => $city_id + 1,
            'company_id' => $company_id + 1,
            'company_name' => $companies[$company_id]['name'],
            'buildings' => rand(10, 90)
        )
    );
}

echo ',"streets":' . json_encode($streets);
$streets = null;
ob_end_flush();


echo '}}';