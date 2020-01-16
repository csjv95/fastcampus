# 복습노트

날짜:2020-01-15


Git Bash 명령어
---------------


| linux | full name | effect |ex
|-------|:---:|----:|--------|
| `ls` | list | 현재 폴더들 리스트업 |
| `li -1` | list 1  | 자세한 정보 포함 한줄씩 출력 |
| `li -a` | list all | 숨긴 파일까지 보여주기 |
| `cd`|chage directory| chage directory|
| `cd..` | chage directory..|상위 폴더로 이동|
|`cd~`| chage directory~ | 현재 로그인한 유저의 최상위 폴더로 이동|
|`touch`|touch|새로운 파일 만들기 | touch 파일이름:|
|`rm`|remove|제거 할떄| remove 이름|
|`mkdir`|Make directory | diectory 만들기| mkdir 이름 |
|`pwd`|Print Working Directory| 현재 위치의 절대경로|
|`mv`| move| 이동할떄,이름 chage| ~~~~~~~~~~
|`w`|write|저장|
|`q`|quit|나가기|
|`status`|status|상태를 확인|git status|
|`cat`|catenate| 파일이름을 인자로 받아서 그 내용을 쭉 이어주는 역할|

모르는것
---------------------------------------

Ls -a 후 .git 이 없다면 연결이 안된 상태

git 줄임말
-------------------------------------

feat = feature

docs = documentations

bug fix: bug fix

conf: configuration

------------------------------------

## How to Start git
## Git coinfiguration

```shell
$ git config --global user.name "csjv95"
$ git config --global user.email "csjv95@gmail.com"
$ git config --global core.editor "vim"
$ git config --global core.pager "cat"
$ git add  git commit
```

## `git init`으로 프로젝트 시작하기
Git init : 깃 초기화
만들어서 사용하는것

## `git clone`으로 프로젝트 시작하기
받아서 쓰는것 ,나도 받아서 사용 할 수있다

## 우리가 마크다운을 쓰는이유
html 문법을 쓰기 번거롭기 떄문에 좀더 쉽게 사용할려고

## 잠깐, README.md 파일은 무슨 파일일까요?
우리가 열심히 어떠한 프로젝트를 진행하고 이것을 깃허브에 올려놓았다고 합시다.
우리는 이 프로젝트가 무엇이고 어떻게 실행되는지 알고 있지만, 다른 사람들은 이 프로젝트가 무슨 프로젝트인지 전혀 알 수가 없습니다.
그래서 우리가 만든 프로젝트에 대한 설명 및 실행방법 등을 적어놓는 파일이라고 생각하시면 됩니다.