# 복습노트

날짜:2020-01-17


css animation
--------------
|vale|mean|base vale|
|----|----|----|
|animaition_name|keyframes 규치을 지정|none|
|animaition_duration|애니메이션의 지속 시간 설정|0s|
|animaiton-timing-function|타이밍 함수 지정|ease|
|animation-delay|애니메이션의 대기 시간 설정|0s|
|animation_iteration_count|애니매이션의 반복 횟수 설정|1|
|animation_direction|애니메이션의 방향설정|nomal|
|animaition_fill_mode|애니메이션의 전후상태(위치)설정|none|
|animaition_play_state|애니메이션의 재생과 정지 설정|runnig|

@keyframes
----------
@keyframes 애니메이션이름 {

    0% {속성: 값}
    50% {속성: 값}
    100% {속성: 값}
}

@keyframes ex_name {

    0% {left: 100px}
    100% {top: 200px}
}
