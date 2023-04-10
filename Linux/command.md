# Linux 명령어

## 리눅스 기초 명령어

```console
$ whoami # 현재 사용자 출력
$ pwd # 현재 디렉토리 위치 출력
$ ls -al # -l: 상세히, -a: 숨겨진 파일 및 디렉토리 포함
$ cd # 디렉토리 이동
$ # 명령어 --help
$ # 터미널 내에서 복사는 Ctrl+Insert 붙여넣기는 Shift+Insert
$ tree # 디렉토리 tree 구조 보기
```

<br>

### 패키지 관리자 apt

```console
$ ### 앞에 sudo 사용으로 권한 획득 ###
$ sudo apt update
$ sudo list --upgradable
$ sudo apt install [appName]
$ sudo aapt remove [appName]
```

<br>

### 파일 시스템

```console
$ chomd 777 elice.txt # 파일 권한 변경
$ chown sang:elice elice.txt # 파일의 소유권 변경
$ mkdir [디렉토리 명]
$ touch [파일 명]
$ rmdir [디렉토리 명] # 안에 파일이 있을 경우 삭제 불가
$ rm [option] [파일 및 디렉토리 명]
$ # -r: 하부 파일까지 삭제, -f: 삭제 여부 묻지 않기 -i: 삭제 여부 묻기
$ cp [option] [대상 위치 및 이름] [복사하고 싶은 위치]
$ # -r: 하위 파일까지 복사, -p: 소유주, 그룹, 권한, 시간 정보를 그대로 복사
$ mv [대상 위치 및 이름] [이동하고 싶은 위치]
$ cat [option] [파일 이름]
$ # -n: 줄번호와 함께 출력, >: 파일 내용 덮어쓰기, >>: 파일 내용 추가하기
$ find [파일 경로] -name [파일 이름] -type d/f
$ head # 처음 N줄 출력
$ tail # 마지막 N줄 출력
```

<br><br>

### 문자열 검색

```console
$ grep [option] [pattern] [파일명]
$ ### option ###
$ -i: 대소문자를 구분하지 않고 검색
$ -v: 패턴과 일치하지 않는 행 출력
$ -c: 패턴과 일치하는 행의 개수 출력
$ -w: 패턴과 단어 단위로 매칭되면 출력
```

<br><br>

### File Redirection

표준 스트림의 흐름을 바꾸어 다른 경로 파일로 재지정함. <br>

```console
$ ls > ls.txt # 파일 목록이 ls.txt로 출력됨. 덮어 씀.
$ ls >> ls.txt # 파일 목록이 ls.txt로 출력됨. 이어 씀.
```

<br><br>

### Pipe

프로세스의 결과를 다른 프로세스로 넘겨줌. <br>
ex) `head a.txt | grep [0-9]`: a.txt 10줄을 뽑아서 숫자가 있는 행을 출력. <br>
ex) `head a.txt | grep [a-z] > result.txt`: a.txt 10줄을 뽑아서 소문자가 있는 행을 result.txt에 출력.

<br><br>

## Shell에서 명령어 '>'와 '>>'의 차이

- `>`: 명렁어 뒤에 나오는 파일에 **쓸 때** 사용(write or overwrite)
- `>>`: 명령어 뒤에 나오는 파일에 **추가할 때** 사용(append)

<br>

### 예시

```console
$ echo abcde > test.txt
```

test.txt파일이 없을 때는 생성하고 있으면 내용을 덮어쓴다.
<br><br>

```console
$ echo abcde >> test.txt
```

test.txt파일이 없을 때는 생성하고 있으면 내용을 추가한다.

<br><br>

### Mount

물리적인 저장장치(보조기억장치)를 디렉토리에 연결

```console
$ mount [option] [device] [directory] # mount
$ remount [device] [directory] # mount 취소
$ df # 현재 mount된 디스크 정보 출력
$ fdisk -l # 디바이스의 파일 시스템명 확인
```

<br><br>

## 프로세스 명령어

```console
$ ps [option]
$ ### options ###
$ # -e: 현재 실행 중인 모든 프로세스 정보 출력
$ # -f: 모든 정보 확인(모든 속성)
$ # -a: 실행중인 전체 사용자의 모든 프로세스 출력(다른 계정이 실행시킨 것 까지)
$ # -u: 프로세스를 실행한 사용자와 프로세스 시작 시간 등을 출력
$ # -x: 터미널 제어 없이 프로세스 현황 보기(실시간 변화 보기)
$ kill [option] [PID] # 프로세스 종료
$ ### options ###
$ # -1: 재실행(SIGHUP)
$ # -9: 강제종료(SIGKILL)
$ # -15: 정상 종료(SIGTERM)
```

<br>

### jobs

- 백그라운드로 실행되는 작업을 보여주는 명령어
- 프로세스와 달리 터미널 명령을 통한 작업만을 의미
- jobs를 통해 프로세스를 실행할 수 있지만 터미널이 종료되면 jobs와 함께 프로세스도 종료
- 각각의 터미널마다 jobs는 따로 존재

```console
$ jobs
$ kill %작업번호
$ fg [jobs id] # 포그라운드로 프로세스 실행
$ bg [jobs id] # 백그라운드로 프로세스 실행
```

<br>

### at과 cron

리눅스 작업 예약.

```console
$ at [option] [time] [date] [+증가시간]
$ ### options ###
$ # -m: 사용자에게 메일 보내기
$ # -f: 스크립트 파일 등을 실행할 때 사용
$ # -l: 예약된 작업 목록 출력, atq도 같은 동작
$ # -v: 작업이 수행될 시간 출력
$ # -d: 예약된 작업 삭제. atrm도 같은 동작
```

#### crontab

예약 명령을 지정된 시간에 따라 주기적으로 실행

```console
$ crontab [option]
$ ### options ###
$ # -l: 현재 계정에 설정된 crontab 정보를 보여줌
$ # -e: 현재 계정의 crontab 정보를 수정함
$ # -r: 현재 계정의 crontab 정보를 모두 삭제
$ # -u: 특정 사용자의 crontab 정보를 다루게 해줌. (root 권한 필요)
```

<br><br>

## SSH

리눅스 터미널에 원격접속

### openssh

```console
$ dpkg -l | grep openssh # openssh 설치 여부 확인
$ sudo apt install openssh-server # openssh 설치
$ sudo service ssh start # ssh 서버 실행
$ service -status-all | grep + # 서버 확인
$ sudo netstat -antp # ssh 포트 확인
$ ssh [서버아이디]@[아이피 혹은 서버이름 혹은 도메인] # ssh 접속
```

<br><br><br>

## Redirect('>')와 Pipe('|')의 차이

### Redirect

<br>

```console
$ ps -ef > text.txt
```

**프로그램 > 파일**: 프로그램의 결과를 다른 파일 스트림으로 전달할때 사용<br>
왼쪽 명령어의 결과(output)를 text.txt파일에 전달한다.

<br>

### Pipe

<br>

```
$ ps -ef | grep bash
```

**프로그램1 | 프로그램2** 프로세스의 결과를 다른 프로세스로 넘겨줄때 사용<br>
왼쪽 명령어의 결과(output)를 오른쪽 명령어에 입력(input)으로 전달한다.

<br><br>
