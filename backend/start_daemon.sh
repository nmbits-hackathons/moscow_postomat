#!/bin/bash

cp postamat.service  /etc/systemd/system/postamat.service
systemctl daemon-reload
systemctl restart postamat.service
systemctl enable postamat.service   #добавить в автозагрузку