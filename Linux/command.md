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
$ echo abcde > test.txt
```

test.txt파일이 없을 때는 생성하고 있으면 내용을 추가한다.

<br><br>

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
