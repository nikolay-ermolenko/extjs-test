<?php

$group_name = array(
    'Notebook',
    'Network adapter',
    'Mouse',
    'Keyboard',
    'Printer',
    'CPU',
    'RAM'
);
$group_name_ru = array(
    'Ноутбук',
    'Сетевой адаптер',
    'Мышь',
    'Клавиатура',
    'Принтер',
    'Процессор',
    'Память'
);
$vendor_name = array(
    'OKLICK',
    'Intel',
    'D-link',
    'TP-LINK',
    'Genius',
    'Canon',
    'Epson',
    'AMD',
    'G-skill'
);


echo '{"state":true,"data":{';

$goods = array();
$goods_count = 500;



ob_start();
for ($i = 0; $i < $goods_count; $i++) {
    $group_index = rand(0, count($group_name) - 1);
    $rand_group_name = $group_name[$group_index];
    $rand_group_name_ru = $group_name_ru[$group_index];
    $rand_vendor_name = $vendor_name[rand(0, count($group_name) - 1)];
    array_push(
        $goods,
        array(
            'id' => $i + 1,
            'name' => $rand_group_name,
            'description' => $rand_group_name_ru . ' ' . $rand_vendor_name .' ' . rand(10, 999),
            'price' => floatval(rand(10, 40000) . '.'. rand(0, 99)),
            'quantity' => rand(0, 600)
        )
    );
}
echo '"goods":' . json_encode($goods);
$goods = null;
ob_end_flush();


echo '}}';